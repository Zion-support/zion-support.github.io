 doc.pipe (res);
doc.fontSize (20) .text (u.title, {
  underline: true 
});
doc.moveDown ();
doc.fontSize (12) .fillColor ('gray') .text (`Date: $ {
  u.date 
}`);
doc.moveDown ();
doc.fillColor ('black') .fontSize (14) .text ('Summary');
doc.fontSize (12) .text (u.summary || '');
doc.moveDown ();
doc.fontSize (14) .text ('KPIs');
doc.fontSize (12) .text (u.kpis || '');
doc.end ();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}