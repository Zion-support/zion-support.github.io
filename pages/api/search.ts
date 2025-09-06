



      ok: true,
      query: q,
      parsed,
      keywords,
      didYouMean,
      counts: {


      },
      results
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    });

  } catch (e: any) {

    res.status(500).json({ ok: false, error: e?.message |"Search failed" });



    const q = (req.query.q as string) || '';
    const access = ((req.headers['x-access-level'] as string) || 'public') as AccessLevel;
    const parsed = await parseQueryToFilters(q);
    const results = searchAll(parsed, access);


    const keywords = Array.from(new Set([...(parsed.skills || []), ...(parsed.keywords || [])]));
    const didYouMean = results.all.length === 0 ? suggestDidYouMean(q) : null;
    res.status(200).json({
      ok: true,
      query: q,
      parsed,
    keywords,
      didYouMean,
      counts: {
        all: results.all.length,
        talent: results.talent.length,
        jobs: results.jobs.length,
        projects: results.projects.length},
      results})
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' })



    const keywords = Array.from(new Set([...(parsed.skills || []), ...(parsed.keywords || [])])),;
    const didYouMean = results.all.length === 0 ? suggestDidYouMean(q) : null;
    res.status(200).json({;
      ok: true;
      query: q;
      parsed;
      keywords,;
      didYouMean,;
      counts: {;
        all: results.all.length,;
        talent: results.talent.length,;
        jobs: results.jobs.length;
        projects: results.projects.length};
      results});
  } catch (error) {
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' });
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
