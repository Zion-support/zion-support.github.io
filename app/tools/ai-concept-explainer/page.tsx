'use client';

import { useState, useRef } from 'react';
import { MotionDiv } from 'framer-motion';

export default function AIConceptExplainer() {
  const [concept, setConcept] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<'explanation' | 'examples' | 'visualization'>('explanation');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concept.trim()) return;

    setLoading(true);
    setError(null);
    
    try {
      // Simulate AI processing - in a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate a mock explanation based on the concept
      const mockExplanation = generateMockExplanation(concept);
      setExplanation(mockExplanation);
    } catch (err) {
      setError('Failed to generate explanation. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as React.FormEvent);
    }
  };

  const generateMockExplanation = (concept: string): string => {
    const conceptLower = concept.toLowerCase().trim();
    
    // Mock explanations for common concepts
    if (conceptLower.includes('react') || conceptLower.includes('hooks')) {
      return `# Understanding React Hooks

React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 to allow developers to use state and other React features without writing class components.

## Key Points:
- **useState**: Adds local state to functional components
- **useEffect**: Handles side effects like data fetching, subscriptions, or DOM manipulation
- **useContext**: Consumes React context in functional components
- **Custom Hooks**: Reusable logic extracted into functions starting with "use"

## Rules of Hooks:
1. Only call Hooks at the top level (not inside loops, conditions, or nested functions)
2. Only call Hooks from React function components or custom Hooks

## Example:
\`\`\`jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Fetch user data when userId changes
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return <div>{user ? user.name : 'Loading...'}</div>;
}
\`\`\`

Hooks make it easier to reuse stateful logic between components and improve code organization.`;
    } else if (conceptLower.includes('javascript') || conceptLower.includes('js') || conceptLower.includes('es6')) {
      return `# Understanding Modern JavaScript (ES6+)

Modern JavaScript (ES6 and later) introduced many features that make code more concise, readable, and maintainable.

## Key Features:
- **Arrow Functions**: \`() => {}\` for concise function syntax
- **let/const**: Block-scoped variable declarations
- **Template Literals**: \`\`Hello \${name}\`\` for string interpolation
- **Destructuring**: Extract values from arrays/objects easily
- **Spread/Rest Operators**: \`...array\` and \`...args\` for flexible parameter handling
- **Modules**: \`import/export\` for code organization
- **Promises & Async/Await**: Better asynchronous code handling
- **Classes**: Syntactic sugar for prototype-based inheritance

## Example - Destructuring & Spread:
\`\`\`javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// Object destructuring
const { name, age, ...info } = { name: 'John', age: 30, city: 'NY', job: 'Dev' };
// name = 'John', age = 30, info = { city: 'NY', job: 'Dev' }

// Spread operator
const combined = [...[1, 2], ...[3, 4]]; // [1, 2, 3, 4]
const copy = {...original, newProp: 'value'};
\`\`\`

These features collectively improve developer experience and enable more functional programming patterns.`;
    } else if (conceptLower.includes('css') || conceptLower.includes('flexbox') || conceptLower.includes('grid')) {
      return `# Understanding CSS Layout: Flexbox vs Grid

CSS Flexbox and Grid are two powerful layout systems that solve different layout problems.

## Flexbox (One-dimensional):
- Designed for laying out items in a single row or column
- Excellent for navigation bars, card layouts, form controls
- Properties: \`display: flex\`, \`flex-direction\`, \`justify-content\`, \`align-items\`, \`flex-wrap\`
- Key concepts: Main axis vs Cross axis, flex-grow, flex-shrink, flex-basis

## Grid (Two-dimensional):
- Designed for complex layouts with rows AND columns
- Perfect for page layouts, image galleries, dashboards
- Properties: \`display: grid\`, \`grid-template-columns\`, \`grid-template-rows\`, \`grid-gap\`
- Key concepts: Grid lines, grid tracks, grid areas, explicit vs implicit grid

## When to Use Which:
- **Use Flexbox** when: You need to align items along one axis, distribute space, or create responsive components
- **Use Grid** when: You need to control both rows and columns, create complex layouts, or define precise positioning

## Example - Card Layout with Flexbox:
\`\`\`css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 250px; /* grow, shrink, basis */
}

/* Responsive behavior */
@media (max-width: 768px) {
  .card {
    flex: 1 1 100%; /* Full width on small screens */
  }
}
\`\`\`

## Example - Dashboard Layout with Grid:
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}

.sidebar {
  grid-column: 1;
  grid-row: 1 / 4;
}

.header {
  grid-column: 2;
  grid-row: 1;
}

.main {
  grid-column: 2;
  grid-row: 2;
}

.footer {
  grid-column: 2;
  grid-row: 3;
}
\`\`\`

Both systems work together beautifully - use Grid for overall page structure and Flexbox for components within grid areas.`;
    } else if (conceptLower.includes('api') || conceptLower.includes('rest') || conceptLower.includes('graphql')) {
      return `# Understanding APIs: REST vs GraphQL

APIs (Application Programming Interfaces) allow different software systems to communicate with each other.

## REST (Representational State Transfer):
- Architectural style using HTTP methods (GET, POST, PUT, DELETE)
- Resources identified by URLs
- Stateless interactions
- Multiple endpoints for different resources
- Over-fetching/under-fetching common issue
- Well-established, widely understood

## GraphQL:
- Query language for APIs developed by Facebook
- Single endpoint for all operations
- Clients request exactly what they need
- Strongly typed schema
- Real-time capabilities with subscriptions
- Reduces over-fetching and under-fetching

## Key Differences:
- **Data Fetching**: REST gets fixed data structures; GraphQL lets clients specify needed fields
- **Endpoints**: REST has multiple endpoints; GraphQL typically has one
- **Versioning**: REST often uses versioned URLs; GraphQL evolves through schema changes
- **Caching**: REST benefits from HTTP caching; GraphQL requires more sophisticated caching approaches

## When to Use Which:
- **Choose REST** when: You have simple resources, need broad compatibility, or want to leverage HTTP caching extensively
- **Choose GraphQL** when: You need flexible data fetching, have complex nested data requirements, or want to reduce API calls

## Example - Fetching User Data:
### REST Approach:
\`\`\`javascript
// Multiple requests needed
fetch('/users/123')          // Get basic user info
  .then(res => res.json())
  .then(user => {
    fetch(`/users/123/posts`) // Get user's posts
      .then(res => res.json())
      .then(posts => {
        // Combine data
      });
  });

// OR over-fetching with one large endpoint
fetch('/users/123?include=posts,followers')
  .then(res => res.json())
  .then(data => {
    // Extract needed parts, discard rest
  });
\`\`\`

### GraphQL Approach:
\`\`\`javascript
// Single request for exactly what's needed
fetch('/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: \`
      query GetUserProfile {
        user(id: "123") {
          id
          name
          email
          posts {
            id
            title
            createdAt
          }
          followerCount
        }
      }
    \`
  })
})
.then(res => res.json())
.then(data => {
  // Use exactly the data requested
});
\`\`\`

Many applications use both approaches - REST for simple public APIs and GraphQL for complex internal data needs.`;
    } else {
      // Generic explanation for unknown concepts
      return `# Understanding \`${concept}\`

While I don't have a specific predefined explanation for "\`${concept}\`", I can help you break down and understand this concept through structured analysis.

## Concept Analysis Framework:

### 1. **Definition & Core Idea**
What is the fundamental concept or principle being discussed?

### 2. **Purpose & Motivation**
Why was this concept created? What problem does it solve?

### 3. **Key Components & Characteristics**
What are the essential parts or features that make up this concept?

### 4. **How It Works**
What is the mechanism or process behind this concept?

### 5. **Use Cases & Applications**
Where and how is this concept practically applied?

### 6. **Benefits & Advantages**
What advantages does this concept offer over alternatives?

### 7. **Limitations & Considerations**
What are the drawbacks or considerations when using this concept?

### 8. **Related Concepts**
What other concepts are closely related or often used alongside this one?

## Getting Started:
To better understand "\`${concept}\`", consider:
- Looking for official documentation or tutorials
- Finding practical examples or use cases
- Identifying similar concepts you already understand
- Experimenting with simple implementations
- Joining community discussions or forums

Would you like me to help you explore any particular aspect of this concept in more detail? For example, we could dive deeper into specific use cases, compare it with alternatives, or look at implementation examples.`;
    }
  };

  return (
    <MotionDiv className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI Concept Explainer
          </h1>
          <p className="text-lg text-gray-600">
            Get clear, structured explanations of any technical concept
          </p>
        </header>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="mb-4">
            <label htmlFor="concept-input" className="block text-sm font-medium text-gray-700 mb-2">
              What concept would you like to understand?
            </label>
            <div className="relative">
              <textarea
                id="concept-input"
                ref={textareaRef}
                rows={3}
                placeholder="e.g., React hooks, JavaScript promises, CSS Grid, REST API, Machine learning..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {concept.length > 0 && (
                <span className="absolute bottom-2 right-3 text-sm text-gray-500">
                  {concept.length}/100
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Press Enter to explain (Shift+Enter for new line)
            </p>
          </div>
          
          <button
            type="submit"
            disabled={loading || !concept.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <span>Explaining...</span>
              </>
            ) : (
              <>
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 1118 0z"></path>
                </svg>
                <span>Get Explanation</span>
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h3 className="text-red-800 font-semibold mb-2">Error</h3>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {explanation && (
          <div className="space-y-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Explanation of "{concept}"
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentTab('explanation')}
                  className={`px-3 py-2 rounded text-sm font-medium ${
                    currentTab === 'explanation'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Explanation
                </button>
                <button
                  onClick={() => setCurrentTab('examples')}
                  className={`px-3 py-2 rounded text-sm font-medium ${
                    currentTab === 'examples'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Examples
                </button>
                <button
                  onClick={() => setCurrentTab('visualization')}
                  className={`px-3 py-2 rounded text-sm font-medium ${
                    currentTab === 'visualization'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Visualization
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              {currentTab === 'explanation' && (
                <div className="prose prose-lg max-w-none text-gray-800">
                  {explanation.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph.startsWith('```') && paragraph.endsWith('```') ? (
                        <pre className="bg-gray-50 p-4 rounded overflow-x-auto my-4">
                          <code className="language-jsx">{paragraph.slice(3, -3).trim()}</code>
                        </pre>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              )}
              
              {currentTab === 'examples' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Practical Examples</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h4 className="font-semibold text-gray-800 mb-2">Basic Usage</h4>
                      <p className="text-gray-600">Here's how you might typically encounter or use this concept in practice...</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h4 className="font-semibold text-gray-800 mb-2">Common Pattern</h4>
                      <p className="text-gray-600">This is a common pattern or idiom associated with this concept...</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <h4 className="font-semibold text-gray-800 mb-2">Best Practice</h4>
                      <p className="text-gray-600">Following best practices when working with this concept leads to better outcomes...</p>
                    </div>
                  </div>
                </div>
              )}
              
              {currentTab === 'visualization' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Concept Visualization</h3>
                  <div className="bg-gray-50 p-6 rounded">
                    <p className="text-gray-600 text-center">
                      Visual representation would appear here showing relationships, flows, or structure related to "{concept}".
                    </p>
                    <div className="mt-4 h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 1118 0z"></path>
                      </svg>
                      <span className="ml-3 text-sm text-gray-500">Concept diagram placeholder</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {!explanation && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Enter a concept above to get started with your explanation
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setConcept('React hooks');
                  handleSubmit(new FormEvent('submit'));
                }}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                Try React hooks
              </button>
              <button
                onClick={() => {
                  setConcept('JavaScript promises');
                  handleSubmit(new FormEvent('submit'));
                }}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                Try JavaScript promises
              </button>
              <button
                onClick={() => {
                  setConcept('CSS Grid');
                  handleSubmit(new FormEvent('submit'));
                }}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                Try CSS Grid
              </button>
            </div>
          </div>
        )}
      </div>
    </MotionDiv>
  );
}

// Helper type for form events
interface FormEvent extends Event {
  target: HTMLFormElement;
}