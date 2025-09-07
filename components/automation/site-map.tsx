type RouteInfo = any;

    generatedAt = json.generatedAt || ''
origin/cursor/automate-test-improve-and-merge-code-2533

  } catch {}
 ;
  return { props: { routes, generatedAt } }

  return { props: { routes, generated_at } }
});
});
}

export default /**;
 * SiteMapIntelPage - Function description;
 */
function SiteMapIntelPage() {}
  return ("
    <div className="space - y-6">;"
      <h1 className="text - 2xl font - semibold">AI Automation: Site Map Intelligence</h1>;'"
      <div className="text - xs text - gray - 500">Last updated: {generated_at ? new Date (generated_at).toLocaleString () : '—'}</div>;"
      <div className="overflow - auto border rounded">;"
        <table className="min - w-full text - sm">;"
          <thead className="bg - gray - 50">;
            <tr>;"
              <th className="text - left p - 2">Route</th>;"
              <th className="text - left p - 2">Last Modified</th>;
            </tr>;
          </thead>;
          <tbody>;
            {routes.map (r => ("
              <tr key={r.path} className="border - t">;"
                <td className="p - 2">{r.path}</td>;"
                <td className="p - 2">{new Date (r.last_modified).toLocaleString ()}</td>;
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </div>);