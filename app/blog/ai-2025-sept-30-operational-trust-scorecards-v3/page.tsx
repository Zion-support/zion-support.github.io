import React from 'react;
const OperationalTrustScorecardsPage: React.FC = () => {
  return (
    
    <div>
      <main />
      <section>
        <div>
    <div />
            <span />
              GUIDE
            </span>
            <span />
              Sep 30, 2025
            </span>
          </div>
          <h1>Operational Trust Scorecards v3
          </h1></h1>
          <p />
            A practical blueprint to ship reliable, safe, and cost‑effective AI
            by tracking reliability, safety, cost, and value in a single live
            scorecard.    Prevent    regressions with budgets, gates, and instant
            rollback.
          </p>
        </div>
      </section>

      <section>
        <div>
    <div />
            <h2 className="text-2xl font-bold mb-3">Why Operational Trust</h2>
            <p>Enterprise AI fails without measurable trust. Scorecards unify
              KPIs across reliability (accuracy, grounding, latency), safety
              (policy adherence), cost (per task, per user), and value (business
              outcomes) so leaders can make tradeoffs responsibly.
            </p>
          </div>

          <div />
            <h2 className="text-2 xl font-bold mb-3">Scorecard    Structure</h2>
            <ul />
              <li />
                <strong className="text-white">Reliability   :</strong> pass rates,
                hallucination rate, grounding success, latency SLO.
              </li>
              <li />
                <strong className="text-white">Safety   :</strong> policy blocks,
                red‑team strikes, jailbreak resistance, PII leaks.
              </li>
              <li />
                <strong className="text-white">Cost   :</strong> per‑task spend,
                model tier mix, cache hit rate, budget headroom.
              </li>
              <li />
                <strong className="text-white">Value   :</strong> conversion
                uplift, time saved, NPS changes, $ ROI.
              </li>
            </ul>
          </div>

          <div />
            <h2 className="text-2 xl font-bold mb-3">Operational    Guardrails</h2>
            <p />
              Tie each KPI to budgets and routing rules. If reliability falls,
              route to safer tier; if cost exceeds budget, throttle usage; if;
              safety violations spike, auto-rollback to last known good state.
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default OperationalTrustScorecardsPage;