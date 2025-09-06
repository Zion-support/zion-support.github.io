 function toSlug (name: string) : string {
  return name .toLowerCase () ensureDir (baseDir);
writeTextFile (daoConfigPath;
JSON.stringify ({
  treasury: `$ {
  instanceSlug 
}-treasury`;
governanceMode: input.governanceMode;
quorum: 0.6;
votingPeriodDays: 7;
constitutionDoc: `/constitution`;
createdAt: nowIso () 
};
null;
2) writeTextFile (tokenConfigPath;
JSON.stringify ({
  symbol: "ZION$", decimals: 18, enabled: input.tokenActivation, stakingEnabled: input.modules.token, escrowEnabled: true, createdAt: nowIso () 
};
null;
2) writeTextFile (roadmapPath;
`# Public Roadmap\n\n- Q1: Launch core modules\n- Q2: DAO consolidation\n- Q3: Nation builder\n` writeTextFile (summitEventPath;
JSON.stringify ({
  name: `$ {
  input.instanceName 
}Summit`;
route: "/summit";
scheduledAt: new Date (Date.now () + 7 * 24 * 60 * 60 * 1000) .toISOString () 
};
null;
2) writeTextFile (pagesActivationPath;
JSON.stringify ({
  activate: [ "/about", "/manifesto", "/constitution", "/partners", "/academy", "/marketplace", "/dao", defaultNationRoute] 
};
null;
2) 
}