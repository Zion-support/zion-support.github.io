
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');"
      requests = JSON.parse(data)
    }


      id: Date.now().toString(),

      name,
      email,
      company,
      phone,

  }
}

