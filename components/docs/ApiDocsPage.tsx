<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
/> <main className="p-6 space-y-6" > <header className="flex items-center justify-between" > <div> <div className="text-2xl font-bold" >Zion OS API Documentation</div> <div className="text-sm text-high-contrast-muted" >Developer-friendly API docs with live testing</div> </div> <div className="flex gap-2" > <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/openapi" target="blank" rel="noreferrer" >OpenAPI</a> <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/postman" target="blank" rel="noreferrer" >Postman</a> <a className="px-3 py-1 rounded border border-high-contrast-accent" href="/api/docs/graphql" target="blank" rel="noreferrer" >GraphQL</a> </div> </header> {
  activeEndpoint ? (<EndpointDetail endpoint= {
  activeEndpoint 
}/>) : (<div className="text-sm text-high-contrast-muted" >Select an endpoint from the sidebar</div>) 
}<section className="mt-8" > <div className="text-lg font-semibold mb-2" >Changelog</div> <ChangelogWidget /> </section> </main> </div>) 
}</div>) 
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======

>>>>>>> origin/resolved-merge-conflicts
import React, { useMemo, useState } from 'react',
import Sidebar from './Sidebar',
import EndpointDetail from './EndpointDetail',
import v1 from '../../data/api-docs/v1'
import { ApiDocsSpec, EndpointSpec, Visibility } from '../../data/api-docs/types'
export default function ApiDocsPage() {
  const spec: ApiDocsSpec
    setMessage('Saved')

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button onClick={load} className="px-3 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">Load</button>
        <button onClick={save} className="px-3 py-1 rounded bg-high-contrast-accent text-black">Save</button>
        {message && <span className="text-xs text-high-contrast-muted">{message}</span>}
      </div>
      <textarea className="w-full h-40 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary text-sm" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Add changelog entries here..." />
    </div>
  )
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
