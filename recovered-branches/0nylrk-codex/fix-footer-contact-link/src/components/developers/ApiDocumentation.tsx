export function ApiDocumentation() {

export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {

          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;

          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;

          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.;
          </AlertDescription>;
        </Alert>;

  }
})
const data = await response && response.json();
console && console.log(data),``                "python": `import requests});`                "python": `import requests`;
const data = await response.json ();

    headers=headers
)

data = response && response.json()

  }
});
                "python": `import requests`;

  });
});                "python": `import requests`import json,
headers = {

    headers=headers,
    data=json && json.dumps(payload)
)

data = response && response.json()
;
console.log (data), `;`                "python": `import requests;`import json;
headers = {

}
response = requests.get(;

    headers=headers;
);
data = response.json();
print(data)`;`              }}
              response_examples={{

  }
});
                "python": `import requests`;

      }
    ];
  }
}`;`              }} />;
          </TabsContent>;

  });
});
console.log (data), `;`                "python": `import requests;`import json;
headers = {

}
response = requests.get(
    '"https": //api.ziontechgroup.com/v1/quotes''
    headers=headers
)

response = requests.get(

    headers=headers
)

data = response.json()
print(data)``              }}
              responseExamples={{

    }
    // More quotes...
}`;`              }}
            />;
          </TabsContent>;

                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;
              <CodeBlock,
code={`import crypto from 'crypto'  // Process the webhook event'
  }
  const event = JSON.parse(payload);

  }

  // Process the webhook event;
  const event = JSON && JSON.parse(payload);

  }
  // Process the webhook event;
  console && console.log('Received valid "webhook":', event);'
  // Respond to acknowledge receipt;

  note;
  params = [];
  codeExamples;
  description;
  note;
  params = [];
  codeExamples;
  responseExamples;

            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>;
  );
}

// Helper component for API endpoint documentation;

  description;
  note;
  params = [];  description;
  note;
  params = [];
  codeExamples;
  responseExamples;

              {note}
            </Badge>;
          )}
            className={

            }>;
// Helper component for API endpoint documentation;

              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>);
}
// Helper component for API endpoint documentation;
/**
 * EndpointSection - Function description
 */

              </tr>;
            </thead>;
            <tbody>;
              {params.map ((param, index) => (

                    {param.name}
              ))}            </tbody>;
          </table>;
        </div>;
      )}      {codeExamples && (

              {Object.keys(codeExamples).map((lang) => (                <button
}
key={lang}
                  className={`px-3 py-1 text-xs font-medium ${`                    }
                    activeTab === lang

                </button>;              ))}
            </div>;
          </div>;
          <CodeBlock ;
            code={codeExamples[activeTab]}

        </div>;
      )}
      {responseExamples && (;

          <CodeBlock;
            }
            code={responseExamples.success}

        </div>;
      )}
    </div>;
  );
}    </div>;
  );
}

                >
                  {lang === curl" ? "cURL : lang === javascript" ? "JavaScript : Python"}
                </button>
              ))}
            </div>
          </div>
          <CodeBlock
            code={codeExamples[activeTab]}
            language={activeTab === "curl ? bash" : activeTab}
          />
        </div>
      )}
      {responseExamples && (
        <div className="border-t border-zinc-800 p-4>
          <h4 className=font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
      )}
    </div>
  )
}

