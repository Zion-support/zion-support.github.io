import EmptyState from '../../components/ui/EmptyState'
<<<<<<< HEAD
export default function RequestsPage() {
  return (
=======
export default function RequestsPage() {_return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    <div>
      <h2 className="text-xl font-semibold mb-2">Requests</h2>
      <EmptyState title="Nothing here yet..." message="Submit a quote or respond to invitations to see them here." ctaLabel="Submit a quote" ctaHref="/dashboard" />
    </div>
  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}