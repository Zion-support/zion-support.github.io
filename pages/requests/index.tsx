
import EmptyState from '../../components / ui / EmptyState';
export default /**
 * RequestsPage - Function description
 */
function RequestsPage() {

  return (

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export default function RequestsPage() {
  return (;
    <div>;
      <h2 className=&quot;text-xl font-semibold mb-2&quot;>Requests</h2>
      <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Submit a quote or respond to invitations to see them here.&quot; ctaLabel=&quot;Submit a quote&quot; ctaHref=&quot;/dashboard&quot; />

=======
export default function RequestsPage() {_return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Requests</h2>
      <EmptyState title="Nothing here yet..." message="Submit a quote or respond to invitations to see them here." ctaLabel="Submit a quote" ctaHref="/dashboard" />
    </div>
  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
