import { useState } from 'react',;
import { useRouter } from 'next/router',;
;
export default function AdminLoginPage() {;
  const router = useRouter(),;
  const [username, setUsername] = useState(),;
  const [password, setPassword] = useState(),;
  const [error, setError] = useState<string | null>(null),;
</string>
    <div className="max-w-sm mx-auto bg-white p-6 rounded shadow">;"
</div>"
      <h1 className="text-xl font-semibold mb-4">Admin Login</h1>;""
      <form onSubmit={onSubmit} className="space-y-4">;"
</form>
        <div>;
          <label className="block text-sm mb-1">Username</label>;""
          <input className="w-full border rounded px-3 py-2" value={username} onChange={(e) => setUsername(e.target.value)} />;"
</input>
        </div>;
          <label className="block text-sm mb-1">Password</label>;""
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />;"
        </div>;"
        {error && <p className="text-red-600 text-sm">{error}</p>}""
        <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white rounded px-3 py-2 hover:bg-indigo-700 disabled:opacity-50">;"
</button>
        </button>;
      </form>;