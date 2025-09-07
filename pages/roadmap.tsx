const highlights: string[] = [ index === 0 && 'Design system, domain model, and initial data architecture'
index === 1 && 'Verifiable credentials, attestations, and dispute primitives'
index === 2 && 'AI-assisted scoping, matching, and brief generation'
index === 3 && 'Reputation graph, portable profiles, contribution proofs'
index === 4 && 'Programmable escrow, milestone releases, stable on/off-ramps'
index === 5 && 'Liquidity flywheel: supply activation, demand orchestration'
index === 6 && 'Sovereign workspaces: contracts, IP, revenue share automations'
index === 7 && 'Public APIs/SDKs, indexer services, client ecosystem'
index === 8 && 'Progressive decentralization, contributor ownership, councils'
index === 9 && 'Regionalization, localization, reliability, and performance'] .filter (Boolean) const metrics: string[] = [ 'Weekly active contributorsVerified engagements (intros, briefs, scopes) On-chain/escrow settlement volumeTime-to-hire and time-to-payRetention and NPS']
}function defaultOperatorPrompt () : string {
  return `You are Zion's Product Operator. Inputs you will receive: - milestones (string list) - keywords (string list) - priorities (string list) Goals: 1) Produce a 10-stage roadmap labeled Zion v1 → v10 2) For each stage: theme, objective, 3-5 highlights, 3-5 measurable metrics 3) Ensure alignment with AI-native, trustless, talent-first, and sovereign tools ethos 4) Include explicit risks and validation signals per stage 5) Output concise, skimmable, exec-ready text Format: Zion v {
  n 
}— {
  theme 
}Objective: ... Highlights: - ... Metrics: - ... Risks: - ... Validation: - ... ` 
}const stages = useMemo ( () => generateStages ({
  milestones, keywords, priorities 
})
[milestones, keywords, priorities])
return (<> <Head> <title>Zion Roadmap</title> <meta name="description" content="Zion 10-stage product evolution and roadmap generator." /> </Head> <main className="min-h-screen bg-white text-gray-900" > <div className="mx-auto w-full max-w-6xl px-6 py-12" > <header className="mb-8" > <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" >Zion Roadmap</h1> <p className="mt-3 text-gray-700" >Public-facing product evolution from v1 → v10 with a generator for operators.</p> </header> <section className="mb-10 grid gap-6 rounded-lg border border-gray-200 bg-gray-50 p-6 md:grid-cols-3" > <div className="md:col-span-1" > <h2 className="text-xl font-semibold" >Generator Inputs</h2> <p className="mt-1 text-sm text-gray-600" >Tune the roadmap with current context and focus.</p> </div> <div className="md:col-span-2 grid gap-4" > <div> <label className="block text-sm font-medium text-gray-700" >Milestones achieved so far</label> <textarea className="mt-1 w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-black focus:outline-none" placeholder="e.g., MVP live, 100 design partners, 1k weekly active contributors" block text-sm font-medium text-gray-700">Vision keywords</label> <input /> </div> <div> <label className=" block text-sm font-medium text-gray-700">Upcoming priorities</label> <input /> </div> </div> </section> <section className=" mb-12"> <div className=" mb-3 flex items-center justify-between gap-3"> <h2 className=" text-xl font-semibold">Operator Prompt</h2> <button > {
  copied ? 'Copied': 'Copy' 
}</button> </div>) ) 
}</ul> </div> <li>Model hallucinations or bias affecting matches</li> <li>Regulatory and payment-compliance variability</li> </ul> </div> <div className=" mt-3"> <p className=" font-semibold">Validation</p> <ul className=" mt-1 list-disc space-y-1 pl-5 text-gray-800" > <li>Leading indicator movement on activation and retention</li> <li>Faster time-to-hire and time-to-pay</li> <li>Positive contributor NPS and dispute resolution rates</li> </ul> </div> </article>) ) 
}</div> </section> </div> </main> </>) 
}