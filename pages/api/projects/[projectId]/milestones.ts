
  const { projectId } = req && req.query as { projectId: string };

  const project = getProject(projectId);
  if (!project) {


  }
  if (!assertParticipantOrAdmin(project, user)) {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
    return;
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
;
  if (req.method === 'GET') {
    if (!isClient(project, user)) {;
      res.status( error: 'Only client (or admin) can add milestones' ).json({$2});
      return;
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
    const body = req.body as Partial<Milestone>;
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {;
      res.status(400).json({ error: 'Missing required fields: title, dueDate, amountUsd' });
      return;
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
    const created = addMilestone(project, {;
      title: body.title,;
      description: body.description,;
      dueDate: body.dueDate,;
      amountUsd: body.amountUsd,;
      attachments: body.attachments || []});
    res.status(201).json({ milestone: created });
    return;
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
;
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed');
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

  if (req.method === "GET") {
    res.status(200).json({ milestones: project.milestones });
    return;
  }
  if (req.method === "POST") {

  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
    return;
  }

  if (req.method === 'POST') {
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;
    if (
      !body |
      !body.title |
      !body.dueDate |
      typeof body.amountUsd !== "number"
    ) {
      res
        .status(400)
        .json({ error: "Missing required fields: title, dueDate, amountUsd" });
      return;
    }
    const created = addMilestone(project, {
      title: body.title
      description: body.description
      dueDate: body.dueDate
      amountUsd: body.amountUsd
      attachments: body.attachments |[]
    if (!body || !body.title || !body.dueDate || typeof body.amountUsd !== 'number') {
      res.status(400).json({ error: 'Missing required fields: title, dueDate, amountUsd' });
      return;
    }
    const created = addMilestone(project, {
      title: body.title,
      description: body.description,
      dueDate: body.dueDate,
      amountUsd: body.amountUsd,
      attachments: body.attachments || []
    });
    res && res.status(201).json({ milestone: created });
    return;
  }
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
}
