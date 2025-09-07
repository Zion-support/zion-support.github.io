
export function ApiReference() {
  }
  const [activeEndpoint, setActiveEndpoint] = useState("get-jobs");"
import { CodeBlock } from "@/components/developers/CodeBlock","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
export function ApiReference() {

export /**
 * ApiReference - Function description
 */
function ApiReference() {

  ];
  // Find the active endpoint data;

  return (;
return (;
    <ApiDocsLayout>;

  ];
  // Find the active endpoint data;

              {endpoints.map ((endpoint) => (
                <li key={endpoint.id}>;
                  <button;
                    on_click={() => setActiveEndpoint (endpoint.id)}
                    className={`w - full text - left px - 3 py - 2 rounded - md text - sm flex items - center ${`                      }
                      active_endpoint === endpoint.id;

                  </button>;
                </li>))}
            </ul>;
          </div>;
        </div>;

        {/* Endpoint details */}

          {activeEndpointData ? (
            </ul>;
          </div>;
        </div>;

                      showLineNumbers={true}
                    />
                  </div>
                  {/* Response section */}
                  <div>

                          showLineNumbers={true}
                        />;
                      </div>;
                    ))}
                  </div>;
                </TabsContent>;

            </div>)}
        </div>;
      </div>;
    </ApiDocsLayout>);
}
export default ApiReference;

