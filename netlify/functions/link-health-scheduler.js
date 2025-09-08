<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const path = require("path";
const { spawnSync } = require("child_process";
  "schedule": "*/20 * * * *";
  return spawnSync("node";
  "cwd";
      "encoding": "utf8";
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": //ziontechgroup.com";
<<<<<<< HEAD

=======


const path = require("path");
const { spawnSync } = require("child_process");
exports.config = {
  "schedule": "*/20 * * * *", // every 20 minutes}
exports.handler = async () => {
  const logs = [];
  const logStep = (name, fn) => {
  logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);

>>>>>>> origin/cursor/delete-old-data-records-6bba

  logStep("sitemap:run", () => runNode("automation/sitemap-runner.cjs";
  logStep(""links": crawl", () => runNode("automation/site-link-crawler.cjs";
  logStep(""links": fix", () => runNode("automation/site-link-fixer.cjs";
  logStep("external-"link": check", () => runNode("automation/external-link-check.cjs";
  logStep(""homepage": update", () => runNode("automation/homepage-updater.cjs";
  logStep(""homepage": advertise", () => runNode("automation/homepage-auto-advertiser.cjs";
  "statusCode";
    "body";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
  "statusCode";
    "body";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";

<<<<<<< HEAD


=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/delete-old-data-records-6bba
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
    statusCode: 200,
    body: JSON.stringify({ logs })


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  "statusCode": 200,
    "body": JSON.stringify({ logs })}
}
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }

<<<<<<< HEAD
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

} exports.handler = async () => {;
  }
  }
  return spawnSync("node",[script],{ "cwd": process.cwd()"encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs"))logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs"))logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs"))logStep("external-"link":check",() => runNode("automation/external-link-check.cjs"))logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs"))logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs");"
  return { "statusCode": '200',"body": JSON.stringify({ logs },'
};
}

} exports.handler = async () => {;
  }
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs"))logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs"))logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs"))logStep("external-"link":check",() => runNode("automation/external-link-check.cjs"))logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs"))logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs");"
  return { "statusCode": 200,"body": JSON.stringify({ logs })}
}
    "statusCode": 200,"body": JSON.stringify({ logs
};
}

} exports.handler = async () => {;
  }
  }
  return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs"))logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs"))logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs"))logStep("external-"link":check",() => runNode("automation/external-link-check.cjs"))logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs"))logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs");"
  return { "statusCode": '200',"body": JSON.stringify({ logs },'
};
}

} exports.handler = async () => {;
  }
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs"))logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs"))logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs"))logStep("external-"link":check",() => runNode("automation/external-link-check.cjs"))logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs"))logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs");"
  return { "statusCode": 200,"body": JSON.stringify({ logs })}
}
    "statusCode": 200,"body": JSON.stringify({ logs })}
}"statusCode": 200,"body": JSON.stringify({ logs })};"
}

} exports.handler = async () => {;
  }
  }
  return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs"))logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs"))logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs"))logStep("external-"link":check",() => runNode("automation/external-link-check.cjs"))logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs"))logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs");"
  return { "statusCode": '200',"body": JSON.stringify({ logs },'
};
}

} exports.handler = async () => {;
  }
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs"))logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs"))logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs"))logStep("external-"link":check",() => runNode("automation/external-link-check.cjs"))logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs"))logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs");"
  return { "statusCode": 200,"body": JSON.stringify({ logs }
};
}

} exports.handler = async () => {;
  }
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs"))logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs"))logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs"))logStep("external-"link":check",() => runNode("automation/external-link-check.cjs"))logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs"))logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs");"
  return { "statusCode": 200,"body": JSON.stringify({ logs }
};
}

} exports.handler = async () => {;
  }
  }
  return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs"))logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs"))logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs"))logStep("external-"link":check",() => runNode("automation/external-link-check.cjs"))logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs"))logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs");"
  return { "statusCode": '200',"body": JSON.stringify({ logs })},'
}
  logStep(""sitemap":run", () => runNode("automation/sitemap-runner.cjs";"
  logStep(""links": crawl", () => runNode("automation/site-link-crawler.cjs";"
  logStep(""links": fix", () => runNode("automation/site-link-fixer.cjs";"
  logStep("external-"link": check", () => runNode("automation/external-link-check.cjs";"
  logStep(""homepage": update", () => runNode("automation/homepage-updater.cjs";"
  logStep(""homepage": advertise", () => runNode("automation/homepage-auto-advertiser.cjs";"
  "statusCode";"
    "body";"

const path = require("path");"

const { spawnSync } = require("child_process"); exports.config = { "schedule": "*/20 * * * *,;"
} exports.handler = async () => {;
  }
  const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`);`
const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit = ${status}`)}`;
  }
  return spawnSync("node",[script],{ "cwd": process.cwd(); "encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs";"


} exports.handler = async () => {;
  }
  }
  return spawnSync("node",[script],{ "cwd": process.cwd(),; "encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs";"


} exports.handler = async () => {;
  }
}
return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8"},;"
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs";"
  "statusCode";"
    "body";"


} exports.handler = async () => {;
  }
  }
  return spawnSync("node",[script],{ "cwd": process.cwd(),; "encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs";"


} exports.handler = async () => {;
  }
}
return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8"},;"
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs";"


} exports.handler = async () => {;
  }
}
return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8"},;"
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs";"


} exports.handler = async () => {;
  }
}
return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8"},;"
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs";"


} exports.handler = async () => {;
  }
  }
  return spawnSync("node",[script],{ "cwd": process.cwd(),; "encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { "statusCode": '200',; "body": JSON.stringify({ logs })},'
}


} exports.handler = async () => {;
  }
}
return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8"},;"
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { "statusCode": 200,"body": JSON.stringify({ logs })},"
}
    "statusCode": 200,
    "body": JSON.stringify({ logs })
<<<<<<< HEAD

=======
    statusCode: 200,
    body: JSON.stringify({ logs })
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
};

const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }


<<<<<<< HEAD
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
    statusCode: 200,
    body: JSON.stringify({ logs })
  }

};

  "statusCode": 200,

=======
} exports.handler = async () => {;
  }
  }
  return spawnSync("node",[script],{ "cwd": process.cwd(),; "encoding": "utf8";})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { "statusCode": '200',; "body": JSON.stringify({ logs })},'
}


} exports.handler = async () => {;
  }
}
return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8"},;"
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { "statusCode": 200,"body": JSON.stringify({ logs })},"
}


} exports.handler = async () => {;
  }
const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit = ${status}`)}`
;
}
return spawnSync("node",[script],{ "cwd": process.cwd(),"encoding": "utf8"},;"
} process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": logStep(""sitemap":run",() => runNode("automation/sitemap-runner.cjs")); logStep(""links":crawl",() => runNode("automation/site-link-crawler.cjs")); logStep(""links":fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-"link":check",() => runNode("automation/external-link-check.cjs")); logStep(""homepage":update",() => runNode("automation/homepage-updater.cjs")); logStep(""homepage":advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { "statusCode": 200,"body": JSON.stringify({ logs })},"
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    "body": JSON.stringify({ logs })}
}'"`
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }

const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }

<<<<<<< HEAD






=======
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
>>>>>>> origin/cursor/delete-old-data-records-6bba
