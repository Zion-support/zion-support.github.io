
    };
  }
});
  const text = await res.text();

async function main() {}
  const { owner, repo } = getRepo();
  const startBranch = sh('git rev-parse --abbrev-ref HEAD');
  sh('git fetch origin');
  sh('git checkout main');

  const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  let mergedCount = 0; let attempted = 0;
  for (const pr of prs) {}
    attempted++;
    const head = pr.head && pr.head.ref;

    console.log(`Merging head into "main": PR #${pr.number} (${head})`);"
    try {}`;
      sh(`git fetch origin ${head}:${head} || true`);

