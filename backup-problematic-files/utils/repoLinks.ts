import pkg from "../package.json",;
function normalizeRepoUrl(raw?: string): string | undefined {;
  if (!raw) return undefined,;
  // e.g., https://github.com/org/repo.git -> https://github.com/org/repo;
  return raw.replace(/\.git$/, "");
}
;
const repoWebUrl = normalizeRepoUrl(;
  typeof (pkg as any).repository === "string";
    ? ((pkg as any).repository as string);
    : (pkg as any).repository?.url;
<<<<<<< HEAD:utils/repoLinks.ts
);
<<<<<<< HEAD
const defaultBranch = "main";
export function githubFileUrl(pathInRepo: string): string | undefined {if (!repoWebUrl) return undefined;
=======
),;
const defaultBranch = "main",;
export function githubFileUrl(pathInRepo: string): string | undefined {;
  if (!repoWebUrl) return undefined;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85:backup-problematic-files/utils/repoLinks.ts
  return `${repoWebUrl.replace(/#.*$/, "")}/blob/${defaultBranch}/${pathInRepo.replace(/^\//, "")}`;
}
;
export function githubActionsUrl(): string | undefined {;
  if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, "")}/actions`;
}
<<<<<<< HEAD:utils/repoLinks.ts
export function githubRepoUrl(): string | undefined {return repoWebUrl?.replace(/#.*$/, "");
}
=======

const defaultBranch = 'main';
}

export function githubFileUrl(pathInRepo: string): string | undefined {
  if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, '')}/blob/${defaultBranch}/${pathInRepo.replace(/^\//, '')}`;
}

export function githubActionsUrl(): string | undefined {
  if (!repoWebUrl) return undefined;
  return `${repoWebUrl.replace(/#.*$/, '')}/actions`;
}

export function githubRepoUrl(): string | undefined {
  return repoWebUrl?.replace(/#.*$/, '');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
;
export function githubRepoUrl(): string | undefined {;
  return repoWebUrl?.replace(/#.*$/, "");
}
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85:backup-problematic-files/utils/repoLinks.ts
