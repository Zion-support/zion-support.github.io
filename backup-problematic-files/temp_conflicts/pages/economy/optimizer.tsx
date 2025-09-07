import fs from 'fs',;''
import path from 'path',;''
import EnhancedLayout from '../../components/layout/EnhancedLayout',;'
;
export async function getStaticProps() {;'
  const dir = path.join(process.cwd(), 'datareports', 'economyoptimizer'),;'
  let latest:string | null = null,;
  let top:any[] = [],;
  if (fs.existsSync(dir)) {;'
    const latestPath = path.join(dir, 'latest.json'),;'
    if (fs.existsSync(latestPath)) {;'
      try { latest = JSON.parse(fs.readFileSync(latestPath, 'utf8')).latest, } catch {}'
    }
    if (latest) {;
      const p = path.join(dir, `${latest}.json`),;
      if (fs.existsSync(p)) {;'
        try { top = JSON.parse(fs.readFileSync(p, 'utf8'))?.top || [], } catch {}'
      }
    }
  }
  return { props:{ latest, top } },;
}
;
export default function OptimizerPage({ latest, top } any) {;
  return (;
    <EnhancedLayout>;
</EnhancedLayout>'
      <div className="space-y-6">;"
</div>"
        <h1 className="text-2xl font-semibold">Economy Optimizer</h1>;""
          <div className="text-sm opacity-80">Latest:{latest}</div>;""
          <div className="text-sm opacity-80">No optimizer runs yet.</div>;""
          <div className="overflow-x-auto">;"
</div>"
            <table className="w-full text-sm">;"
</table>
              <thead>;
</thead>"
                <tr className="text-left border-b border-gray-200 dark:border-gray-800">;"
</tr>"
                  <th className="py-2 pr-3">Burn%</th>;""
                  <th className="py-2 pr-3">Schedule</th>;""
                  <th className="py-2 pr-3">Score</th>;""
                  <th className="py-2 pr-3">Avg Infl%</th>;""
                  <th className="py-2 pr-3">End Treasury</th>;"
                </tr>;
              </thead>;
              <tbody>;
</tbody>"
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-900">;"
</tr>"
                    <td className="py-1 pr-3">{s.burnTaxPercent}%</td>;""
                    <td className="py-1 pr-3">{s.emissionSchedule}</td>;""
                    <td className="py-1 pr-3">{s.emissionMonthlyChangePct}%</td>;")"
                    <td className="py-1 pr-3">{Number(s.score).toFixed(3)}</td>;""
                    <td className="py-1 pr-3">{Number(s.avgInflationPct).toFixed(2)}%</td>;""
                    <td className="py-1 pr-3">{Math.round(s.endingTreasury).toLocaleString()}</td>;"
                  </tr>;
              </tbody>;
            </table>;
          </div>;
      </div>;
    </EnhancedLayout>;"