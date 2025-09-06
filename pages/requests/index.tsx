




export default function RequestsPage() {
  return (;
    <div>;
      <h2 className=&quot;text-xl font-semibold mb-2&quot;>Requests</h2>
      <EmptyState title=&quot;Nothing here yet...&quot; message=&quot;Submit a quote or respond to invitations to see them here.&quot; ctaLabel=&quot;Submit a quote&quot; ctaHref=&quot;/dashboard&quot; />



    </div>
  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
