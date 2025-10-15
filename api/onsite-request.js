
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');"
      requests = JSON.parse(data)
    }

      id: Date.now().toString(),
>>>>>>> main
      name,
      email,
      phone,

    };
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing requests
    let requests = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    }

    // Add new request
    requests.push(request);
    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    res.status(200).json({ 
      success: true,
      message: 'Onsite service request submitted successfully',
      requestId: request.id
    });
  } catch (error) {

