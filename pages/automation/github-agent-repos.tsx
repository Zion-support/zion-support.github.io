



export default function GithubAgentReposPage() {

  const items: any[] = (data?.items |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Agent Repositories</h1>


export default function GithubAgentReposPage() {

  const items: any[] = (data?.items |[]).slice(0, 50)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Agent Repositories</h1>


            </li>
          ))}
        </ul>
      </div>

    </EnhancedLayout>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{it.description}</p>
            </li>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ul>;
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


}




