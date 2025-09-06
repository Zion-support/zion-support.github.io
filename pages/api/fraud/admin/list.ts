


}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  const { limit = '50', offset = '0', source, userId, status, label } = req.query as Record<string, string>
  const store = getFraudStore()
  const items = await store.listFlagged(parseInt(limit, 10), parseInt(offset, 10), {
    source: source as any
    userId
    status: status as any
    label: label as any})

  res.status(200).json({ items })




}



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: 'Method not allowed' }),
    return;
  }
  if () {) {
  $2
}
    res.status (401).json ({ error: 'Unauthorized' }),
    return;
  }

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { limit = '50', offset = '0', source, userId, status, label } = req.query as Record<string, string>,;
  const store = getFraudStore();
  const items = await store.listFlagged(parseInt(limit, 10), parseInt(offset, 10), {;
    source: source as any,;
    userId,;
    status: status as any;
    label: label as any});
  res.status(200).json({ items });
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




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



