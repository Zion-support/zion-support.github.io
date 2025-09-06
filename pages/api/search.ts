

      ok: true,
      query: q,
      parsed,
      keywords,
      didYouMean,
      counts: {
      },
      results
    });

  } catch (e: any) {
  }
}
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' })
  }
}
    res.status (500).json ({ ok: false, error: e?.message || "Search failed" });
  }
}

    const q = (req.query.q as string) || '';
    const access = ((req.headers['x-access-level'] as string) || 'public') as AccessLevel;
    const parsed = await parseQueryToFilters(q);
    const results = searchAll(parsed, access);
    const keywords = Array.from(new Set([...(parsed.skills || []), ...(parsed.keywords || [])]));
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
