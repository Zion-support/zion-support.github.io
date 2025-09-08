





    headers["Set-Cookie"] = cookies && cookies.join(", ");
    res && res.writeHead(302, { ...headers, Location: "/" });
    res && res.end();


  headers["Set-Cookie"] = cookies && cookies.join();
  res && res.writeHead(302, { ...headers, Location: "/" });
  res && res.end();



}







