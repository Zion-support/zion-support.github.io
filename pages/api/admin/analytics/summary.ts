        rows.push(obj)
      } catch {}
    }

  } catch {
    return []
  }
}
  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value)

  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))

  res.status(200).json({ pagesMostUsed, events, line, funnel });

