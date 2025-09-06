
  }
  try {

    const body = req.body |{}
    const raw = fs.readFileSync(coursesPath, 'utf-8')
    const courses = JSON.parse(raw)
    const existingIndex = courses.findIndex((c: any) => c.id === body.id)
      courses[existingIndex] = { ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }

  } catch (e: any) {
    res.status (500).json ({ error: e?.message ?? 'Failed to save course' });
  }
}
;
