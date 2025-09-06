import pkg from "../package.json",
function normalizeRepoUrl (raw?: string): string | undefined {
  // Check condition
if (return undefined, ) {
  $2
}
  // e.g., https://github.com / org / repo.git -> https://github.com / org / repo;
  return raw.replace (/\.git$/, "");
}
const repoWebUrl = normalizeRepoUrl (
  typeof (pkg as any).repository === "string";
    ? ((pkg as any).repository as string);
    : (pkg as any).repository?.url),
const default_branch = "main",
export function githubFileUrl (pathInRepo: string): string | undefined {
  // Check condition
if (return undefined) {
  $2
}
  return `${repoWebUrl.replace (/#.*$/, "")}/blob/${default_branch}/${pathInRepo.replace (/^\//, "")}`;
}
export function githubActionsUrl (): string | undefined {
  // Check condition
if (return undefined) {
  $2
}
  return `${repoWebUrl.replace (/#.*$/, "")}/actions`;
}
export function githubRepoUrl (): string | undefined {
  return repoWebUrl?.replace (/#.*$/, "");
}
