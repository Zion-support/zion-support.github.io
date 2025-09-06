

export default function HfSpacesPage() {

  const items: any[] = (data?.items |[]).slice(0, 60)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Hugging Face Spaces</h1>

            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>

              <a className="font-medium underline" href={`https://huggingface.co/spaces/${it.spaceId}`} target="_blank" rel="noreferrer">{it.spaceId}</Link>

              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Likes {it.likes} · {it.runtime}</div>
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
