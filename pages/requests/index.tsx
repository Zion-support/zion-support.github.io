<<<<<<< HEAD

import EmptyState from '../../components/ui/EmptyState'

  return (



=======

import EmptyState from '../../components / ui / EmptyState';
export default /**
 * RequestsPage - Function description
 */
function RequestsPage() {

  return (
    <div>;
      <h2 className=&quot;text - xl font - semibold mb - 2&quot;>Requests</h2>;
      <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Submit a quote or respond to invitations to see them here.&quot; cta_label=&quot;Submit a quote & quot; cta_href=&quot;/dashboard & quot; />;
    </div>);
}
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export default function RequestsPage() {
  return (;
    <div>;
      <h2 className=&quot;text-xl font-semibold mb-2&quot;>Requests</h2>
      <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Submit a quote or respond to invitations to see them here.&quot; ctaLabel=&quot;Submit a quote&quot; ctaHref=&quot;/dashboard&quot; />

<<<<<<< HEAD


export default function RequestsPage() {_return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Requests</h2>
      <EmptyState title="Nothing here yet..." message="Submit a quote or respond to invitations to see them here." ctaLabel="Submit a quote" ctaHref="/dashboard" />
=======
=======
export default function RequestsPage() {_return (

    <div>
      <h2 className="text-xl font-semibold mb-2">Requests</h2>
      <EmptyState title="Nothing here yet..." message="Submit a quote or respond to invitations to see them here." ctaLabel="Submit a quote" ctaHref="/dashboard" />

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    </div>
  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
