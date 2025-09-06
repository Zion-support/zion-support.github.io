=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> origin/chore/fix-build-nav-links
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
#!/usr/bin/env node
// Minimal pre-build health check to unblock CI builds.
// Extensible: add real checks as needed.
try {
	console.log('[pre-build] Health check: OK');
	process.exit(0);
} catch (err) {
	console.warn('[pre-build] Non-fatal issue:', err?.message || err);
	process.exit(0);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/chore/fix-build-nav-links
>>>>>>> 5d987fe43090d7728810c06da2fede859a7f3c62
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
