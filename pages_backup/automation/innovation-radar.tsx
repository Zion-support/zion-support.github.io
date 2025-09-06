<<<<<<< HEAD:pages_backup/automation/innovation-radar.tsx
<<<<<<< HEAD:pages/automation/innovation-radar.tsx
<<<<<<< HEAD
<<<<<<< HEAD

        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">

            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>

=======
=======
                {it.source} · {it.author || 'unknown'} · {new Date(it.created_at).toLocaleString()}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/innovation-radar.tsx
  const items: any[] = (data?.items || []).slice(0, 50);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Innovation Radar</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Signals generated at {data?.generatedAt |'—'}</p>
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Signals generated at {data?.generatedAt || '—'}</p>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.source} · {it.author |'unknown'} · {new Date(it.created_at).toLocaleString()}
<<<<<<< HEAD:pages/automation/innovation-radar.tsx
<<<<<<< HEAD
                {it.source} · {it.author || 'unknown'} · {new Date(it.created_at).toLocaleString()}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/innovation-radar.tsx
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Query: {it.query}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD:pages/automation/innovation-radar.tsx
<<<<<<< HEAD
  );
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/innovation-radar.tsx





  );
};


<<<<<<< HEAD:pages_backup/automation/innovation-radar.tsx
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {it.title  } catch (error) {
    console.error("Error:", error);
=======



                {it.title  } catch (error) {}
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/innovation-radar.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.source} · {it.author || 'unknown'} · {new Date(it.created_at).toLocaleString()  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/automation/innovation-radar.tsx
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/innovation-radar.tsx


              </div>"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Query: {it.query}</div>
            </li>
          ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ul>;
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

}

'
                {it.source} · {it.author || 'unknown'} · {new Date(it.created_at).toLocaleString()}
              </div>"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Query: {it.query}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
};
  );
};

                {it.title  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        </ul>;
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages_backup/automation/innovation-radar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/innovation-radar.tsx
=======





'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/innovation-radar.tsx
