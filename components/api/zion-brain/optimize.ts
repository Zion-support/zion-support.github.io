 */
function handler() {}
    if ("
      return res.status (405).json ({ error: "Method not allowed" })) {}
  $2
    if ()) {}
  $2
}"
      return res.status (401).json ({ error: "Unauthorized" })
    const started = Date.now ()
    try {}
      const { prompt, user_intent } = req.body || {}"
      const result = await optimize_prompt (String (prompt || ""), user_intent)
      const latency_ms = Date.now () - started
      const status =;"
        result.optimized.length > String (prompt || "").length * 0.5;"
          ? "ok";"
          : "laggy"
      append_log ({"
        module: "optimizer","
        type: "optimize",
        status: status as any,
        latency_ms,
        payload: {}
          user_intent,"
          original_length: String (prompt || "").length,
          optimized_length: result.optimized.length,
        },
      })
      return res.status (200).json (result)
    } catch (e: any) {}
      append_log ({"
        module: "optimizer","
        type: "optimize","
        status: "error","
        payload: { error: e?.message || "unknown" },
      });"
      return res.status (500).json ({ error: "Optimization failure" })
    append_log ({"
      module: "optimizer","
      type: "optimize","
      status: "error","
      payload: { error: e?.message || "unknown" },
    })
origin/cursor/automate-test-improve-and-merge-code-2533

"
