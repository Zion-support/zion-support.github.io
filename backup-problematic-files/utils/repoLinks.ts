import pkg from "../
  return raw.replace(/\.git$/
  return `${repoWebUrl.replace(/#.*$/, "")}/blob/${defaultBranch}/${pathInRepo.replace(/^\//
  return `${repoWebUrl.replace(/#.*$/
export function githubRepoUrl(): string | undefined {return repoWebUrl?.replace(/#.*$/