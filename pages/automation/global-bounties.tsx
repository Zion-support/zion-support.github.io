

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">
<<<<<<< HEAD
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.repo} · {it.language} · {new Date(it.created_at).toLocaleString()}
              </div>
<<<<<<< HEAD
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels |[]).join(', ')}</div>
=======
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                {it.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.repo} · {it.language} · {new Date(it.created_at).toLocaleString()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
