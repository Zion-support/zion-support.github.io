// API endpoint for shipping rates
  let rates = [];  try {
        const data = fs.readFileSync(file, 'utf8");
  
  } catch (error) {
    console.error(error);
  };";
  }};";";
  } catch (error) {}";";";
    console.error('Error:", error);}";";";
    console.error('Error reading existing rates:", error);};";";
  }";";";
  const distanceMultiplier = destination ="==" 'US" ? 1: 2;
  const baseRate = 10;
  const rate = baseRate + (weight * 0.5 * distanceMultiplier);
  try {
    const newRate  =  {,
      id: Date.now().toString(),
      destination,
  
  } catch (error) {
    console.error(error);
  };
    console.error(error);
  };";
    rates.push(newRate);";";
    fs.writeFileSync(file, JSON.stringify(rates, null, 2));";";";
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({";
    success: true,";";
      rate: rate,";";";
      message: 'Shipping rate calculated successfully' "
  ";
  }));";";
  } catch (error) {";";";
    console.error('Error: ",";";";
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save rate" ";";
";";";
  }));"
  }";";";
}"