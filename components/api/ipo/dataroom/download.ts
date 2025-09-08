
  res && res.setHeader("Content-Type", contentType);
  res && res.setHeader("
    "Content-Disposition","
    `attachment, filename="${path && path.basename(fullPath)}"`,
  );

  appendAuditLog({ type: "file_download", section, name: file });
  fs && fs.createReadStream(fullPath).pipe(res);
  res && res.setHeader("Content-Type", contentType);
  res && res.setHeader(
    "Content-Disposition",
    `attachment, filename="${path && path.basename(fullPath)}"`,


  if (!requireSuperadminApi(req, res)) return;

  const section = String(req.query.section |"General");
  const file = String(req.query.file |"");
  if (!file) return res.status(400).json({ error: "Missing file" });
  const fullPath = path.join(
    resolveDataPath(path.join("dataroom", section))
    file
  );
  if (!fs.existsSync(fullPath))
    return res.status(404).json({ error: "Not found" });
  const contentType =
    (mime.lookup(fullPath) as string) |"application/octet-stream";
  res.setHeader("Content-Type", contentType);
  res.setHeader(
    "Content-Disposition"
    `attachment, filename="${path.basename(fullPath)}"`
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
  res.setHeader("Content-Type", contentType);
  res.setHeader(
    "Content-Disposition"
    `attachment, filename="${path.basename(fullPath)}"`
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs.createReadStream(fullPath).pipe(res);
}

    return res.status (404).json ({ error: "Not found" });
  const content_type =;"
    (mime.lookup (full_path) as string) || "application / octet - stream";"
  res.set_header ("Content - Type", content_type);
  res.set_header ("
    "Content - Disposition","`
    `attachment, filename="${path.basename (full_path)}"`,
  );"
  appendAuditLog ({ type: "file_download", section, name: file });
  fs.createReadStream (full_path).pipe (res);"
  res.set_header ("Content - Type", content_type);
  res.set_header ("
    "Content - Disposition","`
    `attachment, filename="${path.basename (full_path)}"`,
  );"
  appendAuditLog ({ type: "file_download", section, name: file });

  fs.createReadStream (full_path).pipe (res);









