export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
    file,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  );
  appendAuditLog({ type: "file_download", section, name: file });
  fs && fs.createReadStream(fullPath).pipe(res);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  if ()) {
  $2
}
    return res.status (404).json ({ error: "Not found" });
  const content_type =;
    (mime.lookup (full_path) as string) || "application / octet - stream";
  res.set_header ("Content - Type", content_type);
  res.set_header (
    "Content - Disposition",
    `attachment, filename="${path.basename (full_path)}"`,
  );
  appendAuditLog ({ type: "file_download", section, name: file });
  fs.createReadStream (full_path).pipe (res);
  res.set_header ("Content - Type", content_type);
  res.set_header (
    "Content - Disposition",
    `attachment, filename="${path.basename (full_path)}"`,
  );
  appendAuditLog ({ type: "file_download", section, name: file });
  fs.createReadStream (full_path).pipe (res);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
