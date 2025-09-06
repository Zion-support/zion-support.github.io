

  try {

        // ignore


      }
    }
return results;
  } catch {
    return [];
  }
}

      } catch {;
        // ignore;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return results;
  } catch {;
    return [];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default async function handler(req, res) {
  try {
  const dir = path.join(process.cwd(), 'automation_logs'),;
  try {
    if (fs.existsSync(dir)) {;
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().reverse();
      if (files.length > 0) {;
        const logs = files.slice(0, 50).map((f) => {;
          try {
            const raw = fs.readFileSync(path.join(dir, f), 'utf8'),;
            const json = JSON.parse(raw);
            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          } catch {;
            return { id: f, file: f   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        });
        return res.status(200).json({ logs });
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch {;
    // fall through to GitHub;
  }

  const remote = await fetchFromGitHub();
  return res.status(200).json({ logs: remote });
}
}
};



  return res.status(200).json({ logs: remote });

};





