

export default function DevTreePage() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [git, setGit] = useState<ApiResponse["status"] | null>(null),
  const [adminToken, setAdminToken] = useState<string>(""),

  const fetchTree = async (token?: string) => {
    try {

      setNodes(data.nodes),
      setGit(data.status)
    } catch (e: any) {
      setError(e.message || "Failed to load")

  const handleSaveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", adminToken),
    fetchTree(adminToken)
  },

        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken},
        body: JSON.stringify({ path: p })}),

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>

        <div className="ml-auto flex items-center gap-2">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"

            Save Token
          </button>
        </div>
      </div>

      {nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={onDeploy} />
        </div>
      ) : (
        <div>Loading...</div>
