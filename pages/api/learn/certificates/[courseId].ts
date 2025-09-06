import type { NextApiRequest, NextApiResponse } from 'next';


=======
    res.setHeader('Content-Type', 'application/pdf');

    res.setHeader('Content-Disposition', `attachment; filename="${courseId}-certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    // Pipe to response
    // @ts-ignore
    doc && doc.pipe(res);
    // Zion certificate template (simple)


    doc.fontSize(28).text('Zion AI Marketplace', { align: 'center', underline: false });
    doc.moveDown(0.5);

=======

    doc.fontSize(28).text('Zion AI Marketplace', { align: 'center', underline: false });
    doc.moveDown(0.5);

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    doc.fontSize(18).text('Certificate of Completion', { align: 'center' });
    doc.moveDown(1.5);
    doc.fontSize(14).text(`This certifies that`, { align: 'center' });
    doc.moveDown(0.5);


    doc.fontSize(22).text(user.name || user.userId, { align: 'center' });


    doc.moveDown(0.5);
    doc.fontSize(14).text(`has successfully completed`, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(20).text(course.title, { align: 'center' });
    doc.moveDown(0.5);

    doc && doc.rect(0, 0, doc && doc.page.width, doc && doc.page.height).fill('#0f172a');
    doc && doc.fill('#ffffff');

    doc
      .fontSize(28)
      .text('Zion AI Marketplace', { align: 'center', underline: false });    doc && doc.moveDown(0 && 0.5);
    doc && doc.fontSize(18).text('Certificate of Completion', { align: 'center' });
    doc && doc.moveDown(1 && 1.5);
    doc && doc.fontSize(14).text(`This certifies that`, { align: 'center' });
    doc && doc.moveDown(0 && 0.5);
    doc && doc.fontSize(22).text(user && user.name || user && user.userId, { align: 'center' });
    doc && doc.moveDown(0 && 0.5);
    doc && doc.fontSize(14).text(`has successfully completed`, { align: 'center' });
    doc && doc.moveDown(0 && 0.5);
    doc && doc.fontSize(20).text(course && course.title, { align: 'center' });
    doc && doc.moveDown(0 && 0.5);

    doc
      .fontSize(12)
      .text(`Badge: ${course && course.certificationBadge}`, { align: 'center' });

=======
    doc.fontSize(12).text(`Badge: ${course.certificationBadge}`, { align: 'center' });


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

    doc.fontSize(12).text(`Badge: ${course.certificationBadge}`, { align: 'center' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    const date = new Date().toLocaleDateString();

    doc && doc.moveDown(2);
    doc && doc.fontSize(12).text(`Date: ${date}`, { align: 'center' });
    doc && doc.end();

  } catch (e: any) {
    res
      .status(500)
      .json({ error: e?.message ?? 'Failed to generate certificate' });

  }
}
=======

    doc.end()
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to generate certificate' })

  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
;
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
=======
    doc.end();


  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
    res.set_header ('Allow', 'GET');
    return res.status (405).end ('Method Not Allowed');
  }
  const { course_id, user_id = 'demo - user' } = req.query as {
    course_id: string;
    user_id?: string;
  }
  try {
    const users = read_json (users_path);
    const courses = read_json (courses_path);
    const course = courses.find ((c: any) => c.id === course_id);
    const user = users[user_id];
    if (return res.status (404).json ({ error: 'Course not found' })) {
  $2
}
    if (return res.status (404).json ({ error: 'User not found' })) {
  $2
}
    res.set_header ('Content - Type', 'application / pdf');
    res.set_header (
      'Content - Disposition',
      `attachment; filename="${course_id}-certificate.pdf"`);
    const doc = new PDFDocument ({ size: 'A4', margin: 50 });
    res.set_header ('Content - Typeapplication / pdf');
    res.set_header ('Content - Disposition', `attachment, filename="${course_id}-certificate.pdf"`);
    const doc = new PDFDocument ({ size: 'A4', margin: 50 }),
    // Pipe to response;
    // @ts - ignore;
    doc.pipe (res);
    // Zion certificate template (simple);
    doc.rect (0, 0, doc.page.width, doc.page.height).fill ('#0f172a');
    doc.fill ('#ffffff');
;
    doc;
      .font_size (28);
      .text ('Zion AI Marketplace', { align: 'center', underline: false });    doc.move_down (0.5);
    doc.font_size (18).text ('Certificate of Completion', { align: 'center' });
    doc.move_down (1.5);
    doc.font_size (14).text (`This certifies that`, { align: 'center' });
    doc.move_down (0.5);
    doc.font_size (22).text (user.name || user.user_id, { align: 'center' });
    doc.move_down (0.5);
    doc.font_size (14).text (`has successfully completed`, { align: 'center' });
    doc.move_down (0.5);
    doc.font_size (20).text (course.title, { align: 'center' });
    doc.move_down (0.5);
    doc;
      .font_size (12);
      .text (`Badge: ${course.certification_badge}`, { align: 'center' });
    const date = new Date ().toLocaleDateString ();
    doc.move_down (2);
    doc.font_size (12).text (`Date: ${date}`, { align: 'center' });
;
    doc.end ();
  } catch (e: any) {
    res;
      .status (500);
      .json ({ error: e?.message ?? 'Failed to generate certificate' });
  }
}

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
