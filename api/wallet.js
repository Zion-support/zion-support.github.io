// API endpoint for wallet operations
    name: name || '',}
    userId: userId || '',}
    status: 'active',}
    createdAt: new Date().toISOString()}
  };
  try {

    wallets.push(newWallet);
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2));
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({
      success: true,
      message: 'Wallet added successfully' '

  } catch (error) {
    console.error(error);
  }
  }
  } catch (error) {
    console.error('Error: ',
    error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save wallet' 

  }));'
  }
}