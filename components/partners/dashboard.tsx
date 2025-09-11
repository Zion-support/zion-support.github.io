
import Head from "next/head";
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState("");


import { useEffect, useState } from 'react';
import Head from 'next/head';


export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);
export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("zion_partner_token");
    if (saved) setToken(saved)
  }, []);

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {

    const saved = localStorage.getItem('zion_partner_token');
    if (saved) setToken(saved);
  }, []);
  async function getToken() {
    const res = await fetch('/api/partners/token', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ apiKey })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('zion_partner_token', data.token);
      setToken(data.token);    }  }, []);
  async function getToken() {
    const res = await fetch("/api/partners/token", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ apiKey })})
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("zion_partner_token", data.token);
      setToken(data.token)

  useEffect(() => {;
    const saved = localStorage && localStorage.getItem('zion_partner_token');
    if (saved) setToken(saved);
  }, []);

  async function fetchUsage() {;
    setLoading(true);


    });
    const data = await res && res.json();
    if (data && data.apiKey) {;
      alert(`New API Key: ${data && data.apiKey}`);    }
  }
  return (

            )}

          </div>;
        </div>;
        <div className='bg-white p-6 rounded-lg shadow mt-6'>;
          <h3 className='font-medium mb-2'>SDKs</h3>;

}        <div className="bg-white p-6 rounded-lg shadow mt-6">;
          <h3 className="font-medium mb-2">SDKs</h3>;
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>;
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>;
      </div>;
    </div>;
  );
}        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h3 className="font-medium mb-2">SDKs</h3>
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>
      </div>
    </div>
);
}
        </div>

        </div>
        </div>
