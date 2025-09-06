import fs from "fs"
import path from "path"
export type SourceNodeType = "folder" | "file",

export interface SourceNode {
  name: string,
  path: string, // repo-relative path starting with '/'
  type: SourceNodeType,
  children?: SourceNode[],
  exists?: boolean
}

export interface SourceMapStatus {
  gitConnected: boolean,
  gitBranch?: string
}

export interface SourceMapResponse {
  nodes: SourceNode[],
  status: SourceMapStatus
}

const ROOT = process.cwd()

function withPath(base: string, segment: string): string {
  if (base === "/") return `/${segment}`,
  return `${base}/${segment}`
}

function folder(name: string, basePath: string, children: string[] = []): SourceNode {
  const fullPath = withPath(basePath, name),
  return {
    name,
    path: fullPath,
    type: "folder",
    children: children.map((child) => ({ name: child, path: withPath(fullPath, child), type: "folder" }))}
}

export function buildZionSourceMap(): SourceNode[] {_const map: SourceNode[] = [
    // 1. /core
    {
      name: "core", _path: "/core", _type: "folder", _children: [
        { name: "auth", _path: "/core/auth", _type: "folder"},
        {_name: "user", _path: "/core/user", _type: "folder"},
        {_name: "marketplace", _path: "/core/marketplace", _type: "folder"},
        {_name: "payments", _path: "/core/payments", _type: "folder"},
        {_name: "messaging", _path: "/core/messaging", _type: "folder"},
        {_name: "analytics", _path: "/core/analytics", _type: "folder"},
        {_name: "roles", _path: "/core/roles", _type: "folder"},
        {_name: "talent", _path: "/core/talent", _type: "folder"},
        {_name: "client", _path: "/core/client", _type: "folder"}]},
    // 2. /ai
    {_name: "ai", _path: "/ai", _type: "folder", _children: [
        { name: "gpt", _path: "/ai/gpt", _type: "folder"},
        {_name: "resume-generator", _path: "/ai/resume-generator", _type: "folder"},
        {_name: "proposal-writer", _path: "/ai/proposal-writer", _type: "folder"},
        {_name: "contract-writer", _path: "/ai/contract-writer", _type: "folder"},
        {_name: "assistant", _path: "/ai/assistant", _type: "folder"},
        {_name: "prompts", _path: "/ai/prompts", _type: "folder"}]},
    // 3. /dao
    {_name: "dao", _path: "/dao", _type: "folder", _children: [
        { name: "proposals", _path: "/dao/proposals", _type: "folder"},
        {_name: "voting", _path: "/dao/voting", _type: "folder"},
        {_name: "quorum", _path: "/dao/quorum", _type: "folder"},
        {_name: "staking", _path: "/dao/staking", _type: "folder"},
        {_name: "snapshot-integration", _path: "/dao/snapshot-integration", _type: "folder"}]},
    // 4. /token
    {_name: "token", _path: "/token", _type: "folder", _children: [
        { name: "rewards", _path: "/token/rewards", _type: "folder"},
        {_name: "pricing-engine", _path: "/token/pricing-engine", _type: "folder"},
        {_name: "escrow", _path: "/token/escrow", _type: "folder"},
        {_name: "payout-engine", _path: "/token/payout-engine", _type: "folder"},
        {_name: "wallet", _path: "/token/wallet", _type: "folder"}]},
    // 5. /academy
    {_name: "academy", _path: "/academy", _type: "folder", _children: [
        { name: "courses", _path: "/academy/courses", _type: "folder"},
        {_name: "certifications", _path: "/academy/certifications", _type: "folder"},
        {_name: "quiz", _path: "/academy/quiz", _type: "folder"},
        {_name: "video", _path: "/academy/video", _type: "folder"},
        {_name: "ai-tutor", _path: "/academy/ai-tutor", _type: "folder"}]},
    // 6. /governance
    {_name: "governance", _path: "/governance", _type: "folder", _children: [
        { name: "manifesto", _path: "/governance/manifesto", _type: "folder"},
        {_name: "constitution", _path: "/governance/constitution", _type: "folder"},
        {_name: "roadmap", _path: "/governance/roadmap", _type: "folder"},
        {_name: "changelog", _path: "/governance/changelog", _type: "folder"}]},
    // 7. /deployments
    {_name: "deployments", _path: "/deployments", _type: "folder", _children: [
        { name: "multiverse", _path: "/deployments/multiverse", _type: "folder"},
        {_name: "subdomains", _path: "/deployments/subdomains", _type: "folder"},
        {_name: "config-templates", _path: "/deployments/config-templates", _type: "folder"},
        {_name: "environments", _path: "/deployments/environments", _type: "folder"}]},
    // 8. /api
    {
      name: "api",
      path: "/api",
      type: "folder",
      children: [
        { name: "docs", path: "/api/docs", type: "folder" },
        { name: "partners", path: "/api/partners", type: "folder" },
        { name: "integrations", path: "/api/integrations", type: "folder" },
        { name: "webhooks", path: "/api/webhooks", type: "folder" }]}],

  return map
}

function markExistenceRecursive(node: SourceNode): SourceNode {
  const absolutePath = path.join(ROOT, node.path),
  const exists = fs.existsSync(absolutePath)
  const withExists: SourceNode = {
    ...node,
    exists},
  if (node.children && node.children.length > 0) {
    withExists.children = node.children.map(markExistenceRecursive)
  }
  return withExists
}

export function getSourceMapWithExistence(): SourceNode[] {
  const nodes = buildZionSourceMap()
  return nodes.map(markExistenceRecursive)
}

export interface DeployTemplateResult {
  createdPaths: string[],
  skippedPaths: string[]
}

export function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

export function deployBasicTemplateForPath(repoRelativePath: string): DeployTemplateResult {
  const absoluteDir = path.join(ROOT, repoRelativePath),
  const createdPaths: string[] = []
  const skippedPaths: string[] = []
  const keepFile = path.join(absoluteDir, ".keep"),
  if (!fs.existsSync(keepFile)) {
    fs.writeFileSync(keepFile, ""),
    createdPaths.push(keepFile)
  } else {
    skippedPaths.push(keepFile)
  }

  const readmeFile = path.join(absoluteDir, "README.md"),
  if (!fs.existsSync(readmeFile)) {
    const readme = `# ${path.basename(absoluteDir)}\n\nThis module is part of the Zion OS modular source tree. Customize as needed.\n`
    fs.writeFileSync(readmeFile, readme),
    createdPaths.push(readmeFile)
  } else {
    skippedPaths.push(readmeFile)
  }
}