from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='apikey',
            name='name',
            field=models.CharField(max_length=120, blank=True, default=''),
        ),
    ]

