import { useState } from "react"
import Head from "next/head"
export default function Partners() {
  const [form, setForm] = useState({
    name: "",
    entityType: "",
    pocName: "",
    pocEmail: "",
    useCaseType: "Education Partnership"}),
  const [result, setResult] = useState<any>(null),
  const [loading, setLoading] = useState(false),

  async function submit(e: React.FormEvent) {
    e.preventDefault(),
    setLoading(true),
    setResult(null),
    const res = await fetch("/api/partners/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
import { useState } from &quot;react&quot;;
import Head from &quot;next/head&quot;;

export default function Partners() {
  const [form, setForm] = useState({
    name: "&quot;,
    entityType: "&quot;,
    pocName: "&quot;,
    pocEmail: "&quot;,
    useCaseType: &quot;Education Partnership&quot;});
import Head from "next/head";

export default function Partners() {_const [form, _setForm] = useState({
    name: "", _entityType: "", _pocName: "", _pocEmail: "", _useCaseType: "Education Partnership"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function submit(_e: React.FormEvent) {_e.preventDefault();
    setLoading(true);
    setResult(null);
    const res = await fetch(&quot;/api/partners/register&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      body: JSON.stringify({
        name: form.name,
        entityType: form.entityType,
        useCaseType: form.useCaseType,
        pointOfContact: { name: form.pocName, email: form.pocEmail }})}),
    const data = await res.json()
    setLoading(false),
    setResult(data)
              <option>Education Partnership</option>
              <option>Workforce Development</option>
              <option>Token Integration</option>
              <option>Custom Marketplace Instance</option>
            </select>
            <button disabled={loading} className=&quot;bg-black text-white px-4 py-2 rounded disabled:opacity-50&quot;>{loading ? &quot;Submitting...&quot; : &quot;Register&quot;}</button>
          </form>

          <div className=&quot;bg-white p-6 rounded-lg shadow&quot;>
            <h2 className=&quot;text-xl font-medium mb-4&quot;>Available Endpoints</h2>
            <ul className=&quot;list-disc ml-6 space-y-1 text-sm&quot;>
              <li>POST /talents</li>
              <li>GET /jobs</li>
              <li>GET /certifications</li>
              <li>POST /verify-student</li>
              <li>POST /redeem-grant</li>
            </ul>
            <div className=&quot;mt-6&quot;>
              <a className=&quot;text-blue-600 underline mr-4&quot; href=&quot;/api/partners/sdk?type=rest&quot;>Download REST SDK</a>
              <a className=&quot;text-blue-600 underline&quot; href=&quot;/api/partners/sdk?type=graphql&quot;>Download GraphQL SDK</a>
            </div>
            <div className=&quot;mt-6 text-sm text-gray-600&quot;>
              <p>Badges:</p>
              <div className=&quot;flex gap-2 mt-2&quot;>
                <span className=&quot;inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded&quot;>Verified Partner</span>
                <span className=&quot;inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded&quot;>Government API Active</span>
              </div>
            </div>
          </div>
        </div>

        {result && (
          <div className=&quot;mt-8 bg-white p-6 rounded-lg shadow&quot;>
            <h3 className=&quot;text-lg font-medium mb-2&quot;>Registration Successful</h3>
            <p className=&quot;text-sm&quot;>Your API Key:</p>
            <pre className=&quot;bg-gray-100 p-3 rounded text-xs overflow-auto&quot;>{result.apiKey}</pre>
            <a href={result.dashboardUrl} className=&quot;inline-block mt-4 bg-black text-white px-4 py-2 rounded&quot;>Go to Dashboard</a>
          </div>
        )}
      </div>
    </div>
  )
}