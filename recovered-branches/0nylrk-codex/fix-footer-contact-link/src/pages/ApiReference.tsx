import React from 'react',

      responses: {,
        "200": {,
          description: "A list of jobs";
          example: `{,
      "id": "job-123";
      "title": "Senior React Developer";
      "description": "We're looking for an experienced React developer...";
      "category": "development";
      "budget": {,
        "min": 5000;
        "max": 10000;
        "currency": "USD",
      };
      "status": "open";
      "created_at": "2023-05-10T15: 30:00Z",};
    // More jobs...,
  ];
  "count": 42;
  "limit": 20;
  "offset": 0,
}`,
  "error": "rate_limit_exceeded";
  "message": "Rate limit exceeded. Please try again in 60 seconds";
  "retry_after": 60,
}`,
        }
      requestExample: `curl -X GET \\,
  https://api.zionai.com/v1/api/jobs?status=open&limit=10 \\,
  -H "Authorization: Bearer YOUR_API_KEY"`,};
        { name: "title", type: "string", required: true, description: "Job title" ,};
        { name: "description", type: "string", required: true, description: "Detailed job description" ,};
        { name: "category", type: "string", required: true, description: "Job category" ,};
        { name: "budget", type: "object", required: true, description: "Budget information with min, max, and currency" };
        { name: "skills", type: "array", description: "Array of required skills" ,};
  "id": "job-456";
  "title": "UX Designer";
  "description": "Looking for a UX designer with 3+ years experience...";
  "category": "design";
  "budget": {,
    "min": 3000;
    "max": 5000;
    "currency": "USD",
  };
  "status": "open";
  "created_at": "2023-05-15T10: 12:00Z",}`,
        };
          example: `{,
  "error": "validation_error";
  "message": "Invalid input";
  "details": [,
    {}
  ],
}`,
        }
      requestExample: `curl -X POST \\,
  https://api.zionai.com/v1/api/jobs \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
    "title": "UX Designer";
    "description": "Looking for a UX designer with 3+ years experience...";
    "category": "design";
    "budget": {,
      "min": 3000;
      "max": 5000;
      "currency": "USD",
    };
    "skills": ["Figma", "User Research", "Prototyping"];
    "deadline": "2023-07-01T00: 00:00Z",}'`,
    };
      "id": "talent-123";
      "full_name": "Jane Smith";
      "professional_title": "Full Stack Developer";
      "skills": ["React", "Node.js", "TypeScript"];
      "hourly_rate": 75;
      "availability": "full-time";
      "years_experience": 5;
      "location": "Remote, US";
      "bio": "Experienced full stack developer with a focus on React and Node.js...",
    };
    // More talent profiles...,
  ];
  "count": 38;
  "limit": 20;
  "offset": 0,
}`,
        }
      requestExample: `curl -X GET \\,
  https://api.zionai.com/v1/api/talent?skills=React,Node.js&limit=10 \\,
  -H "Authorization: Bearer YOUR_API_KEY"`,}
                      language="bash",
                      showLineNumbers={true}
                    />,
                  </div>,
                    {Object.entries(activeEndpointData.responses).map(([status, response]) => (,
                      <div key={status} className="mb-6">,
                        <div className="flex items-center mb-3">,
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${,))