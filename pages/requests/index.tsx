import EmptyState from '../../components/ui/EmptyState'
<<<<<<< HEAD
<<<<<<< HEAD
export default function RequestsPage() {
  return (
=======

export default function RequestsPage() {
  return (;
    <div>;
      <h2 className=&quot;text-xl font-semibold mb-2&quot;>Requests</h2>
      <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Submit a quote or respond to invitations to see them here.&quot; ctaLabel=&quot;Submit a quote&quot; ctaHref=&quot;/dashboard&quot; />
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export default function RequestsPage() {_return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    <div>
      <h2 className="text-xl font-semibold mb-2">Requests</h2>
      <EmptyState title="Nothing here yet..." message="Submit a quote or respond to invitations to see them here." ctaLabel="Submit a quote" ctaHref="/dashboard" />
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </div>
  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}