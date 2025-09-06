<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/automation/global-bounties.tsx
<<<<<<< HEAD:pages/automation/global-bounties.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/global-bounties.tsx

        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">

<<<<<<< HEAD:pages_backup/automation/global-bounties.tsx
<<<<<<< HEAD
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>

=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/global-bounties.tsx
  );
};





                {it.title  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.repo} · {it.language} · {new Date(it.created_at).toLocaleString()  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>


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

<<<<<<< HEAD:pages_backup/automation/global-bounties.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore - JSON import import data from '../../data/global-bounties.json';
export default function GlobalBountiesPage() {

  const items: any[] = (data?.items |[]).slice(0, 100)

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/global-bounties.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const items: any[] = (data?.items || []).slice(0, 100);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Global Bounties</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.repo} · {it.language} · {new Date(it.created_at).toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels |[]).join(', ')}</div>
<<<<<<< HEAD
<<<<<<< HEAD:pages/automation/global-bounties.tsx
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/global-bounties.tsx
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/global-bounties.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
<<<<<<< HEAD:pages/automation/global-bounties.tsx
<<<<<<< HEAD
  );
};
<<<<<<< HEAD
=======
  );
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  );
};
  );
};

<<<<<<< HEAD:pages_backup/automation/global-bounties.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                {it.title  } catch (error) {
    console.error("Error:", error);
=======
                {it.title  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/global-bounties.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>"
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
<<<<<<< HEAD
<<<<<<< HEAD
                {it.repo} · {it.language} · {new Date(it.created_at).toLocaleString()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </ul>;
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages_backup/automation/global-bounties.tsx
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
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/automation/global-bounties.tsx
=======





'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/automation/global-bounties.tsx
=======
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
