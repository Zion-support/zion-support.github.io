export default function MessageThreadPage() {_return <div>Thread</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}