
export type LegalStructure = 'Cayman Foundation' | 'Swiss Verein' | 'US 501(c)(6)' | 'DAO-native Wrapper';

export default function CharterGenerator() {

  const charterText = useMemo(() => {
    const name = protocolName.trim() || 'Zion';
    const symbol = tokenSymbol.trim() || 'ZION$';

    const header = `${name} Foundation Charter`;
      : '';

    const dao = includeDAOIntegration
      ? `6. DAO Integration\n- The Foundation recognizes the ${name} DAO as the canonical on-chain governance venue for protocol-level changes.\n- Nation/community DAOs may be delegated voting rights proportionally to stake and verified contribution.\n- Core Stewards are appointed via DAO ratification and subject to removal via DAO vote.`
      : '';

    const grants = includeGrants

    const amendments = `10. Amendments\n- Amendable via DAO supermajority or Foundation supermajority plus DAO simple majority.\n- All amendments versioned and time-stamped on IPFS and Git repositories.`;

    const liability = `11. Limitations and Disclaimers\n- No warranties; the ${name} Protocol is experimental.\n- The Foundation does not offer securities and does not guarantee token value.\n- Jurisdictional compliance: local obligations remain with individual actors.`;


  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Charter Settings</h2>
          <label className="block text-sm">Protocol Name
            <input className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={protocolName} onChange={(e) => setProtocolName(e.target.value)} />
          </label>
          <label className="block text-sm">Token Symbol
            <input className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
          </label>
          <label className="block text-sm">Legal Structure
            <select className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={legalStructure} onChange={(e) => setLegalStructure(e.target.value as LegalStructure)}>
              <option value="Cayman Foundation">Cayman Foundation</option>
              <option value="Swiss Verein">Swiss Verein</option>
              <option value="US 501(c)(6)">US 501(c)(6)</option>
            </select>
          </label>
          <div className="flex items-center gap-3">
            <input id="contrib" type="checkbox" checked={includeContributorRules} onChange={(e) => setIncludeContributorRules(e.target.checked)} />
            <label htmlFor="contrib" className="text-sm">Include contributor program rules</label>
          </div>
          <div className="flex items-center gap-3">
            <input id="dao" type="checkbox" checked={includeDAOIntegration} onChange={(e) => setIncludeDAOIntegration(e.target.checked)} />
            <label htmlFor="dao" className="text-sm">Include DAO integration</label>
          </div>
          <div className="flex items-center gap-3">
            <input id="grants" type="checkbox" checked={includeGrants} onChange={(e) => setIncludeGrants(e.target.checked)} />
            <label htmlFor="grants" className="text-sm">Include multiverse grants</label>
          </div>
        </div>
        <div className="space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Export</h2>
          <div className="flex gap-3">
            <button
              className="px-3 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700"
              onClick={() => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${protocolName || 'zion'}-foundation-charter.md`;
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              Download .md
            </button>
            <button
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700"
              onClick={() => navigator.clipboard.writeText(charterText)}
            >
              Copy to clipboard
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Generated Charter Preview</h2>
        <textarea className="w-full h-96 rounded border border-gray-300 dark:border-gray-700 bg-transparent p-3 font-mono text-sm" value={charterText} readOnly />
      </div>
    </div>
  );
}