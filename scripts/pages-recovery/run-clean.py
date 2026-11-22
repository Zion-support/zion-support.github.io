import importlib.util, os
from pathlib import Path
spec=importlib.util.spec_from_file_location('sanitizer',Path(__file__).with_name('sanitize-artifact.py'))
module=importlib.util.module_from_spec(spec); spec.loader.exec_module(module)
root=Path(os.environ['RUNNER_TEMP'])
try:
    result=module.clean(root/'pages-source/original.zip',root/'pages-clean/artifact.tar','5e517ee4002b52f79292d3709c70d1ab7b51c059e30e6362d488de988c90b27e','b669845de282faf7656a2298b2fcc5d540a6df31')
    if result['removed_files']!=1 or result['preserved_members']!=43352 or not result['source_unchanged']: raise ValueError()
except Exception: raise SystemExit('Archive verification failed; no deployment permitted.')
print('Verified archive sanitized; remaining members preserved.')
