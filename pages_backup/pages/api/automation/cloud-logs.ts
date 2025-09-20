

      } catch {,
        // ignore,
      }
    }
return results,
  } catch {,
    return [],
  }
}
,
export default async /**,
 * handler - Function description,
 */,
function handler() {,
const dir = path.join (process.cwd (), 'automation_logs'),
  try {,
    if () {) {,
  $2
}
      const files = fs.readdir_sync (dir).filter ((f) => f.ends_with ('.json')).sort ().reverse (),
      // Check condition,
if ( {) {,
  $2
}
        const logs = files.slice (0, 50).map ((f) => {,
          try {,
            const raw = fs.readFileSync (path.join (dir, f), 'utf8'),
            const json = JSON.parse (raw),
            return { id: json.id || f, file: f, generated_at: json.generated_at, insights: json.insights }
          } catch {,
            return { id: f, file: f }
          }
        }),
        return res.status (200).json ({ logs }),
      }
    }
  } catch {,
  return res.status(200).json({ logs: remote }),
}
},